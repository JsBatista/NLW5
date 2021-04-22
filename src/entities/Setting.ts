import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"

import { v4 as uuid } from "uuid"; // As versões diferem de acordo com o método de geração do uuid

@Entity("settings")
class Setting {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
    
  }

}

export { Setting }

/*
Para configurar o uuid de id, precisamos instalar a biblioteca uuid e seus tipos

*/