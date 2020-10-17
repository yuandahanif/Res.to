/* eslint-disable no-return-assign */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import errorTemplate from '../components/error-component';
import preLoadComponent from '../components/loader-component';

/* eslint-disable no-tabs */
const addPreLoader = preLoadComponent;
const preLoaderToError = (errorCode: string | number) => document!.querySelector('.pre-load')!.innerHTML = errorTemplate(errorCode);
const removePreload = () => document!.querySelector('.pre-load')!.remove();

export { addPreLoader, preLoaderToError, removePreload };
