/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.scss';

function Feedback() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <p className={s.text}>
          Made with &#10084; by
          <a className={s.link} href="https://github.com/danagilliann">
            &nbsp;Dana
          </a>
        </p>
        <span className={s.spacer}>|</span>
        <a
          className={s.link}
          href="https://github.com/danagilliann/travel_log/issues"
        >Report an issue</a>
      </div>
    </div>
  );
}

export default withStyles(Feedback, s);
