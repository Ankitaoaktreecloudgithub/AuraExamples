import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
  
export default class GetAccountRecords extends LightningElement {
    @wire(getAccountList) accounts;
}