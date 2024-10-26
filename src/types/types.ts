export interface AccountDetails {
  accountno: string;
  status: string;
  telephoneno: string;
}

export interface Service {
  serviceID: string;
  packageName: string;
  serviceStatus: string;
  serviceType: string;
  updatedDTM: string;
}

export interface ServiceDetailsAPIResponse {
  accountCategory: string;
  accountNo: string;
  contactMobile: string;
  contactNamewithInit: string;
  listofBBService: Service[];
  listofPEOService: Service[];
  listofVoiceService: Service[];
  promotionName: string;
  promotionType: string;
}
