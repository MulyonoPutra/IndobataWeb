import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Feedback, IFeedback } from 'src/app/core/domain/entities/feedback';
import { FeedbackRepository } from 'src/app/core/repositories/feedback-repository';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  template: `
      <div class="jumbotron" style="color: #40a11ade;">
        <div class="title-header animate__animated animate__zoomInDown font-poppins" >
          <h1>Contact Us</h1>
          <div style="color: #ffffff23;">
            <h2>Indobata</h2>
            <h3>Concrete Roof Tile & Concrete Block Manufacturing</h3>
          </div>
        </div>
      </div>
      <section id="contact">
        <div class="container">
          <!-- <h2 style="text-align: center;">Contact Us</h2> -->
          <div class="card-deck" style="color: rgb(109, 109, 107);">
            <div
              class="card card-address border-col mt-3 mb-3"
              style="width: 18rem; border-radius: 20px;"
            >
              <ul class="list-group list-group-flush" style="height: 5px;">
                <li class="list-group-item border-col">
                  <i class="fas fa-map-marked-alt"></i>
                  <span>
                    Jl. Raya Karang Hilir, Karang Tengah No. 833 Cibadak –
                    Sukabumi
                  </span>
                </li>
                <li class="list-group-item border-col" style="height: 50px;">
                  <i class="fas fa-phone mr-2 mb-4"></i>
                  <span>(0266) 532 888</span>
                </li>
                <li class="list-group-item border-col" style="height: 50px;">
                  <i class="fas fa-mobile-alt mr-2 mb-4"></i>
                  <span>0858–9999 7150</span>
                </li>
                <li class="list-group-item border-col" style="height: 50px;">
                  <i class="fas fa-mobile-alt mr-2 mb-4"></i>
                  <span>0822–9999 7151</span>
                </li>
                <li class="list-group-item border-col" style="height: 50px;">
                  <i class="fas fa-envelope-open-text mr-2 mb-4"></i>
                  <span>contact@indobata.com</span>
                </li>
                <li class="list-group-item border-col" style="height: 50px;">
                  <i class="fas fa-envelope-open-text mr-2 mb-4"></i>
                  <span>info@indobata.com</span>
                </li>
                <li class="list-group-item" style="height: 50px;">
                  <div style="justify-content: center;">
                    <a
                      href="https://www.instagram.com/cvindobata/"
                      target="_blank"
                    >
                      <img
                        src="assets/img/ig.png"
                        class="social-icon mr-3"
                        alt="instagram"
                      />
                    </a>
                    <a href="https://www.facebook.com/indobata/" target="_blank">
                      <img
                        src="assets/img/fb.png"
                        class="social-icon mr-4"
                        alt="facebook"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCH64bq7r3lg_S5Dl-Uyo0Ow"
                      target="_blank"
                    >
                      <img
                        src="assets/img/youtube.png"
                        class="social-icon mr-4"
                        alt="youtube"
                      />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <img
                        src="assets/img/twitter.png"
                        class="social-icon"
                        alt="twitter"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div class="card rounded mt-3 mb-3 border-col">
              <div class="card-body">
                <form
                  name="editForm"
                  role="form"
                  novalidate
                  (ngSubmit)="save()"
                  [formGroup]="editForm"
                >
                  <div class="form-group">
                    <input
                      required
                      id="name"
                      class="form-control form-control-lg mb-3"
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      data-cy="name"
                      formControlName="name"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <input
                      class="form-control form-control-lg mb-3"
                      type="text"
                      name="email"
                      id="email"
                      data-cy="email"
                      formControlName="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <textarea
                      required
                      id="messages"
                      style="height: 120px;"
                      class="form-control form-control-lg"
                      type="text"
                      name="messages"
                      id="messages"
                      data-cy="messages"
                      formControlName="messages"
                      placeholder="Messages"
                      required
                    ></textarea>
                  </div>
                  <button
                    style="margin-right: auto;"
                    class="btn btn-primary rounded border mt-2"
                    [disabled]="editForm.invalid || isSaving"
                  >
                    Send Messages
                  </button>
                </form>
                <p id="my-form-status"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section class="bg-section"></section> `,
})
export class ContactUsComponent implements OnInit {
  public isSaving = false;

  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    email: [null, [Validators.required]],
    messages: [null, [Validators.required]],
  });

  constructor(
    protected feedbackService: FeedbackRepository,
    protected fb: FormBuilder
  ) { }

  ngOnInit(): void { }

  save(): void {
    this.isSaving = true;
    const feedback = this.createFromForm();
    this.subscribeToSaveResponse(this.feedbackService.addFeedback(feedback));
  }

  protected createFromForm(): Feedback {
    return {
      ...new IFeedback(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      email: this.editForm.get(['email'])!.value,
      messages: this.editForm.get(['messages'])!.value,
    };
  }

  protected subscribeToSaveResponse(
    result: Observable<HttpResponse<Feedback>>
  ): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    Swal.fire('Thank you', 'For your feedback, we appreciate it!', 'success');
    setTimeout(() => {
      this.previousState();
    }, 7000);
  }

  protected onSaveError(): void {}

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  previousState(): void {
    window.history.back();
  }
}
