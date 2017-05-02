import {Customer} from './customer';

export class Invoice {
	id: number;
	customer: Customer;
	issuedAt: Date;
	period: Date;
	amount: number;
	definitive: boolean;
}
