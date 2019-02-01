import { ChildrenEntity } from './reddit.models';

export interface ClientChildrenEntity extends ChildrenEntity {
  hours_message: string;
  seen: boolean;
}
