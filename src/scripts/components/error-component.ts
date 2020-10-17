/* eslint-disable no-tabs */

const errorTemplate = (errorCode: string | number) => `
<div class="error-container">
				<div class="error-message">
					<h1 class="error-header">
						Maaf, Sepertinya terjadi error pada aplikasi T_T.
					</h1>
					<p class="error-code">Error kode: <span>${errorCode}</span></p>
					<ul>
						<li>
							<span>Mohon periksa koneksi internet anda.</span>
						</li>
						<li>
							<span>Silahkan muat ulang halaman. atau</span>
						</li>
						<li>
							<span>
								hubungi
								<a
									target="_blank"
									href="https://www.instagram.com/yuanda.yuu/"
									rel="noopener"
									rel="noreferrer"
									>Administrator
								</a>
								jika error terus terjadi.
							</span>
						</li>
					</ul>
				</div>
			</div>
`;

export default errorTemplate;
