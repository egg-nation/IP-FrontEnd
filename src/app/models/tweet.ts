export class Tweet {
  _id: string;
  full_text: string;
  features?: any;
  svm_verdict?: any;
  cnn_verdict?: any;
  tag: any;
  name: any;
  link: any;
  pic: any;

  constructor(_id, full_text, features, svm_verdict, cnn_verdict, tag, name, link, pic) {
    this._id = _id;
    this.full_text = full_text;
    this.features = features;
    this.svm_verdict = svm_verdict;
    this.cnn_verdict = cnn_verdict;
    this.tag = tag;
    this.name = name;
    this.link = link;
    this.pic = pic;
  }
}
