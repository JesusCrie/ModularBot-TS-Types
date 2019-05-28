import { Polyglot } from './graal-compatibility';
import { Channel, MessageChannel } from './@jda/entities';

function test() {
    const a: MessageChannel = Polyglot.import('aChannel');
    a.sendMessage("test").queue();
}
