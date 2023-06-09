import { Navigation } from './Navigation';

import { Routes } from '@shared/model/routes';

export const Header = () => {
  return (
    <div>
      <Navigation pages={Routes} />
    </div>
  );
};
