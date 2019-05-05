import { ShardManager } from '@jda/core';
import { Message, User } from '@jda/entities';

export class Test {

    constructor(private a: ShardManager, private m: Message) {
        a.restart();
        a.restart(15);

        let u: User = m.getAuthor();
    }
}
