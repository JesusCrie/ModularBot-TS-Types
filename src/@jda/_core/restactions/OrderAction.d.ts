import { RestAction } from './RestAction';

export declare abstract class OrderAction<T, M extends OrderAction<T, M>> extends RestAction<void> {

    getCurrentOrder(): Array<T>;

    selectPosition(selected: number | T): M;

    getSelectedPosition(): number;

    getSelectedEntity(): T;

    moveUp(amount: number): M;

    moveDown(amount: number): M;

    moveTo(position: number): M;

    swapPosition(swapPosition: number): M;

    reverseOrder(): M;

    shuffleOrder(): M;

    sortOrder(comparator: (o1: T, o2: T) => number): M;
}
