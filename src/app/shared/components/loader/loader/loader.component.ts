import { Component } from '@angular/core';
import {AsyncPipe, NgClass} from "@angular/common";
import {LoaderService} from "../../../services/loader/loader.service";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {}
}
