export class Contact{

    //Default values
    _firstName = "";
    _lastName = "";
    _email = "";
    _connected = false;

    constructor(_firstName, _lastName, _email, _connected){
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._email = _email;
        this._connected = _connected;
    }
}

