import { Address } from './address';

export interface User {
  readonly address: Address;
  // readonly id: number;
  readonly name: string;
}
