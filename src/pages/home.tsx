const MainPage = () => (
	<div className="bg-coffee p-4 h-full w-screen">
		<figure className="mt-24">
			<img
				src="/SCP_logo.svg"
				alt="SCP Logo"
				className="w-40 h-40 mx-auto bg-white p-3 rounded-lg"
			/>
		</figure>
		<h1 className="text-4xl font-bold mt-10 mb-10 text-center">
			全代会をSCPにしてみた
		</h1>
		<div className="bg-white my-20 mx-20 pt-10 px-10 pb-14 rounded-lg">
			<div className="bg-gray-300 p-5 rounded-lg">
				<div>
					この記事は、かふぇおれ Advent Calender 2024 の20日目の記事です。
				</div>
				<div>
					19日目の記事は、黒柴さんの「誕生日記念 歌ってみた（仮）」でした。
				</div>
			</div>
			<div>
				<h2 className="text-3xl font-bold pl-10 mt-10 mb-5">はじめに</h2>
				<div>
					<div className="leading-loose">
						さてさてさ～て、皆さん普段全代会で活動していて、思ったことはありませんか？「この団体、異常だな……」と。
						はい、僕が誰よりも感じ、その原因になっている内の1人だと思います。
					</div>
					<div className="leading-loose">
						というわけで、異常と言えばSCPですよね。SCP以外ありませんよね？大事なことなので2回言いました。反論は受け付けません。
					</div>
				</div>
			</div>
			<div>
				<div>
					<h2 className="text-3xl font-bold pl-10 mt-10 mb-5">
						そもそもSCPとは？
					</h2>
					<div className="leading-loose">
						まずSCPについて簡単に一言でまとめると、世界に散在するアノマリーをSCP財団という組織が「確保・収容・保護」という理念の基、SCPを管理し、それらについて報告書形式でまとめたものです。SCPって何？という人は初めて聞く用語が複数出てきたと思うのでそれぞれ以下の解説を参照してください。
					</div>
					<h3 className="text-xl font-bold pl-10 mt-5">用語解説</h3>
					<div>
						<ul>
							<li className="font-semibold underline mt-3">・ SCP</li>
							<div className="leading-loose pl-5">
								SCP財団の理念である「確保、収容、保護」(Secure, Contain,
								Protect)の略称。また、SCP財団が管理するアノマリーの総称
							</div>
							<li className="font-semibold underline mt-3">・ SCP財団</li>
							<div className="leading-loose pl-5">
								SCPの補足・研究を世界政府より委任された秘密組織(という設定)
							</div>
							<li className="font-semibold underline mt-3">・ アノマリー</li>
							<div className="leading-loose pl-5">
								自然法則に反した異常な物品・存在・現象・場所の総称
							</div>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<div>
					<div>
						<h2 className="text-3xl font-bold pl-10 mt-10 mb-5">おわりに</h2>
						<div className="leading-loose">
							まあそんなわけで、全代会をSCPに仕立ててみました。様々な場所に遊びを散らばせておいたので、探してみてください。SCPの一番の面白さは、人によって受け取り方が異なり、様々な考察・解釈がなされるところだと思っています。それでは、SCPの沼へ皆さまをご招待いたします。
						</div>
						<div className="leading-loose">
							また、SCPになじみのない方でも楽しんでいただけるように、後日本家解説ということで、どんなことを考えながら書いたのか、どんな遊びを散りばめたのかを解説する記事も公開予定です。お楽しみに。それでは、前置きが長くなりましたが、以下のリンクから認証を行い、創作SCPをお楽しみください。
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-3xl font-bold pl-10 mt-10 mb-5">
						認証ページリンク
					</h2>
					<div>
						<a
							href="/certification"
							className="text-blue-500 underline text-lg"
						>
							認証ページへ
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default MainPage;
