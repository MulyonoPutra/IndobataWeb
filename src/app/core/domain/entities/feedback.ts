export interface Feedback {
  id?: number;
  name?: string;
  email?: string;
  messages?: string;
}

export class IFeedback implements Feedback {
  constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public messages?: string
  ) {}
}

