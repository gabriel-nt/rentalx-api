import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoruUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoruUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
