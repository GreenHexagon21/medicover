
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyCustomPreset = definePreset(Aura, {
    semantic: {
        components: {
            tieredmenu: {
                background: 'white',
            }
        }
    }
});
