import { Injectable } from '@nestjs/common';
import { CreateDtoPost } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,private fileService: FilesService){}

  async create(dto: CreateDtoPost, image: any) {
    const fileName = await this.fileService.createFile(image)
    const post = await this.postRepository.create({...dto, image: fileName})
    return post;
  }
}
