import { Component, OnInit } from '@angular/core';

type Task = {
  icon: string;
  color: 'success' | 'warning' | 'primary' | 'danger' | 'info';
  title: string;
  description: string;
};

const tasks: ReadonlyArray<Task> = [
  {
    icon: './assets/media/icons/duotune/abstract/abs027.svg',
    color: 'success',
    title: 'Journal Voucher',
    description: 'Project Manager',
  },
  {
    icon: './assets/media/icons/duotune/art/art005.svg',
    color: 'warning',
    title: 'Payment Voucher',
    description: 'Art Director',
  },
  {
    icon: './assets/media/icons/duotune/communication/com012.svg',
    color: 'primary',
    title: 'Sales Invoice',
    description: 'Lead Developer',
  },
  {
    icon: './assets/media/icons/duotune/coding/cod008.svg',
    color: 'danger',
    title: 'Debit Note',
    description: 'DevOps',
  },
  {
    icon: './assets/media/icons/duotune/general/gen049.svg',
    color: 'info',
    title: 'Credit Note',
    description: 'QA Managers',
  },
  {
    icon: './assets/media/icons/duotune/finance/fin006.svg',
    color: 'success',
    title: 'Cash Voucher',
    description: 'Art Director',
  },
  {
    icon: './assets/media/icons/duotune/graphs/gra008.svg',
    color: 'danger',
    title: 'Vendor Invoice',
    description: 'Web, UI/UX Design',
  },
  {
    icon: './assets/media/icons/duotune/graphs/gra008.svg',
    color: 'danger',
    title: 'Claim',
    description: 'MyLCSB\'s Module',
  },
];

@Component({
  selector: 'app-tasks-tab',
  templateUrl: './tasks-tab.component.html',
  styleUrls: ['./tasks-tab.component.scss'],
})
export class TasksTabComponent implements OnInit {
  allTasks: ReadonlyArray<Task> = [];
  constructor() {}

  ngOnInit(): void {
    this.allTasks = tasks;
  }
}
