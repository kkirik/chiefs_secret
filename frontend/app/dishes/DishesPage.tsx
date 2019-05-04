import React from 'react';
import { observer } from 'mobx-react';

import { BaseLayout } from 'app/core/layout/BaseLayout';
import apple from 'assets/images/Rice-Bowl.png';

@observer
class DishesPage extends React.Component {
  render() {
    return (
      <BaseLayout>
        <div>Dishes</div>
        <img src={apple} alt="1" />
      </BaseLayout>
    );
  }
}

export { DishesPage };
