import base64 from 'react-native-base64';
import { sha256, sha256Bytes } from 'react-native-sha256';
import PhonePePaymentSDK from 'react-native-phonepe-pg';
import axios from 'axios';
import auth from '@react-native-firebase/auth';
export const openPhonePePaymentPage = async ({amount,invoice_id,item,userData}) => {
    console.log(amount,invoice_id,item,userData)
    // console.log(item)
    // return false
    const salt = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
    const merchantId = 'PGTESTPAYUAT'
    const saltIndex = 1;
    const body = {
      "merchantId": merchantId,
      "merchantTransactionId": invoice_id, //random
      "merchantUserId": auth().currentUser.uid,
      "amount": Number(amount * 100), // replace amount
      "redirectUrl": "", 
      "redirectMode": "REDIRECT",
      "callbackUrl": "https://webhook.site/callback-url",//change with actual url
      "mobileNumber": userData?.Phone.toString(), //user mobile number
      "paymentInstrument": {
        "type": "PAY_PAGE"
      }
    };
    console.log('here 1', body);
    const encoded = await base64.encode(JSON.stringify(body));
    console.log('here 2', encoded);
    const checksumSha = await sha256(encoded + '/pg/v1/pay' + salt)
    const checksum = checksumSha + '###' + saltIndex;
    console.log(checksum, 'here 3');
    try{
      const res = await axios({
        url : 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
        method : 'POST',
        headers : {
          'Content-Type' : 'Application/json',
          'Accept' : 'Application/json',
          'X-VERIFY' : checksum
        },
        data : {
          "request" : encoded
        }
      });
      console.log(res.data.data.instrumentResponse.redirectInfo);
      await PhonePePaymentSDK.init(
        'UAT',
        merchantId,
        '4ecad7712bb247cc99ec4c1c792b1ffb',
        true
        ).then(result => {
        // handle promise
      })
      PhonePePaymentSDK.startPGTransaction(
        encoded,
        checksum,
        '/pg/v1/pay',
        {
          'Content-Type' : 'Application/json',
          'Accept' : 'Application/json',
          'X-VERIFY' : checksum
        },
        null,
        null
      ).then( a => {
        console.log('result 1 : ',a)
        return true
        // onSuccessPayment(invoice_id,item)
      })
    }
    catch(e){

      console.log(e.response.data);
      throw e
    }
  };