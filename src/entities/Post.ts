import { PrimaryKey, Property } from "@mikro-orm/core";
import { Entity } from "@mikro-orm/core/decorators/Entity";

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ type: "text" })
  title!: string;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}
