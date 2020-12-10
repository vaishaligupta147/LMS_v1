import { Injectable } from '@angular/core';
import { Logger } from './logger';
@Injectable()
export class RegisterService {

  values = [];
  constructor(private logger: Logger) { 

  }
  getDetails(name, emailid, password) {
    this.values = [name, emailid, password];
    this.logger.logMessage("name ", this.values[0]);
    this.logger.logMessage("email ", this.values[1]);
    this.logger.logMessage("password ", this.values[2]);
  }
}
