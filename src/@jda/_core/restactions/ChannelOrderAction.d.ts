import { OrderAction } from './OrderAction';
import { Channel, ChannelType } from '../../_entities/Channel';
import { Guild } from '../../_entities/Guild';
import { Category } from '../../_entities/Category';

export declare class ChannelOrderAction<T extends Channel> extends OrderAction<T, ChannelOrderAction<T>> {

    public getGuild(): Guild;

    public getChannelType(): ChannelType;
}

export declare class CategoryOrderAction<T extends Channel> extends ChannelOrderAction<T> {

    public getCategory(): Category;
}
