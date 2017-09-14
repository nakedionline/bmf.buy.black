export class User{
  id:       number;
  title:    string;
  name:     string;
  surname:  string;
  position: string;
  idnumber: number;
  gender:   string;

  constructor(
    public userid:        number,
    public usertitle:     string,
    public username:      string,
    public usersurname:   string,
    public userposition:  string,
    public useridnumber:   number,
    public usergender:    string,
    public userservice:    string
  ){}
}
