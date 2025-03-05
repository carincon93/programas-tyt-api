import { SetMetadata } from '@nestjs/common';

// Define los roles como metadata para usarlos en los guards
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
