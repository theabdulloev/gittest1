import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateDtoPost } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Посты')
@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService){}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreateDtoPost,@UploadedFile() image){
       return this.postService.create(dto,image)
    }
}
