import Override from './core/Override';

/*
 * overrides.js
 *
 * Import your override objects/files and then add them to the Override singleton
 * NOTE: all overrides must be added in this file and only this file
 */

// (1) Import overridden components
import Button from './overrides/buttons/Button';
import Input from './overrides/inputs/Input';

// (2) Register overridden components
Override.add(Button);
Override.add(Input);
