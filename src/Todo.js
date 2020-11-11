export class Todo {
  constructor(title, body, isTreated = false) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.createDate = new Date().toLocaleString();
    this.isTreated = isTreated;
    this.treatmentDate = isTreated ? this.createDate : "";
    this.updateDate = "";
  }
}
