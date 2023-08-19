import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
// 异常拦截器
@Catch(HttpException)
export class AllExceptionsFilter implements ExceptionFilter {
  private errorTime: string;
  constructor() {
    this.errorTime =
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
  }
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    response.status(status).json({
      success: false,
      errorTime: this.errorTime,
      data: exception,
      status,
      path: request.url,
    });
  }
}
