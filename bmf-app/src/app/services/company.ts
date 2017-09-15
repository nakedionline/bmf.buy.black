export class Company{

 constructor(
 public id:             number,
 public companyRegNo    :string,
 public companyName     :string,
 public companyTaxNo    :string,
 public physicalAddress :string,
 public city            :string,
 public postalCode      :string,
 public telephone       :string,
 public fax             :string,
 public email           :string,
 public businessType    :string,
 public services        :Array<string>,
 public operatingHours  :string
){}
}
