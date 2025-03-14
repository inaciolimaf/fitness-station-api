import { JwtModuleOptions } from '@nestjs/jwt';
import { configuration } from '@config/configuration';

const config = configuration();

export const jwtConfig: JwtModuleOptions = {
  secret: config.jwtSecret,
  signOptions: {
    expiresIn: '3600s',
  },
};
