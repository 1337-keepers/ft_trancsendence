import { Controller, Get, Req, Res } from '@nestjs/common';
import { OutService } from './out.service';

@Controller()
export class OutController {
    constructor(private outService: OutService) { 
        this.outService = outService;
      }

  @Get('out')
  async GetOut(@Req() req, @Res() res: Response) {
    this.outService.deleteUser(req.user.id);
    // res.redirect(`http://localhost:3001/profile`);
  }

}
