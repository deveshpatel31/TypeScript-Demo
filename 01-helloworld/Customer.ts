class Customer {
  private _firstName: String;
  private _lastName: String;
    
  constructor(firstName: String, lastName: String) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  
  public get firstName(): String {
    return this._firstName;
  }
  public set firstName(value: String) {
    this._firstName = value;
  }
  public get lastName(): String {
    return this._lastName;
  }
  public set lastName(value: String) {
    this._lastName = value;
  }
}