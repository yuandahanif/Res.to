/* eslint-disable no-tabs */
const addPreLoader = `
<div class="pre-load">
				<span class="dot"> .</span>
				<span class="dot"> .</span>
				<span>Mohon tunggu, sedang memuat data</span>
				<span class="dot"> .</span>
				<span class="dot"> .</span>
      </div>`;
const removePreload = () => document!.querySelector('.pre-load')?.remove();

export { addPreLoader, removePreload };
