/**
 * @File Name          : SIS_MyProfileController.cls
 * @Description        : 
 * @Author             : Avinash
 * @Group              : 
 * @Last Modified By   : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Last Modified On   : 6/5/2020, 2:42:43 PM
 * @Modification Log   : 
 * Ver       Date            Author      		    Modification
 * 1.0    6/2/2020   Avinash     Initial Version
**/
public with sharing class SIS_MyProfileController {
   
    @AuraEnabled(cacheable = true)
    public static String contactEmailMetadataMauritius(String campus) {

        String tempCampus;
        if(campus != null && campus != ''){
            tempCampus = campus == 'Mauritius' ? 'Mauritius_Contact_Emails' : 'Rwanda_Contact_Emails';
            System.debug('Hello metadat!');
            SIS_Contact_Emails__mdt cntMdt = [select id,QualifiedApiName,Registrar_Email__c,Career_Email__c
                     from SIS_Contact_Emails__mdt
                    where QualifiedApiName =: tempCampus LIMIT 1];
                    System.debug('Hello metadat123 '+cntMdt.Registrar_Email__c);
         return cntMdt.Registrar_Email__c;
        }
        
        return '';   
    }
    @AuraEnabled
    public static String updateContactInfo(contact con) {

       String result = 'Suceess';
       try{
           update con;
       }catch(Exception e){
           result = e.getMessage();
       }
        
        return result;   
    }

}