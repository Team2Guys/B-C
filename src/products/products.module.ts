import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { JwtMiddleware } from '../utils/Authorization';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
// export class ProductsModule {}


export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude({path: "products/GetAllProducts", method:RequestMethod.GET})
      .forRoutes(ProductsController); 
  }
}
