import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  public emptyImage: any
  public gentengBeton: any
  public pavingBlock: any
  public roster: any
  public batako: any

  constructor() {}

  ngOnInit(): void {
    this.emptyImage = true
  }

  public showGentengImage() {
    this.gentengBeton = true
    if (this.gentengBeton) {
      this.emptyImage = this.pavingBlock = this.roster = this.batako = false
    }
  }

  public showPavingImage() {
    this.pavingBlock = true
    this.emptyImage = this.gentengBeton = this.roster = this.batako = false
  }

  public showRosterImage() {
    this.roster = true
    this.emptyImage = this.gentengBeton = this.pavingBlock = this.batako = false
  }

  public showBatakoImage() {
    this.batako = true
    this.emptyImage = this.gentengBeton = this.roster = this.pavingBlock = false
  }
}
