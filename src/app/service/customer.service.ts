import { Injectable } from '@angular/core';

import { Customer } from '../model/customer';

export const CUSTOMERS: Customer[] = [
	{id: 11, name: 'Ladlas Ladlassen', email: 'ladlas@ladlassen.com', address: 'Hemma' }
];

@Injectable()
export class CustomerService {
	getCustomers(): Customer[] {
		return CUSTOMERS;
	}
}
