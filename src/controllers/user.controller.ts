import * as us from '../services/user.service';
import { Request, Response } from 'express';

/**
 * Get user
 */
export const getUser = (req: Request, res: Response) => {
  var id = req.params.id;

  us.getUser(id)
    .then((data: any) => {
      return res.status(data.code).json(data);
    })
    .catch((error) => {
      return res.status(error.code).json({
        error
      });
    });
};
