<script>
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	initializeStores();

	const drawerStore = getDrawerStore();
	import { AppBar } from '@skeletonlabs/skeleton';
	import { AppShell } from '@skeletonlabs/skeleton';
	import logo from '$lib/icons8-proteína-64.png'
	import indice from '$lib/icons8-lista-48.png'
	// let peso = document.querySelector('#peso');
	// let alt = document.querySelector('#alt')
	// function calcularImc(peso, alt){
	// 	return (alt * alt) / peso;
	// }
	function drawerOpen(){
	drawerStore.open({});
}
</script>
<body class="bg-surface-900">
	
<AppShell>
	<svelte:fragment slot="header"><AppBar>
	<svelte:fragment slot="lead"><img src="{logo}" alt="protein-logo" class="w-12"></svelte:fragment>
	<h1 class="h3 font-bold">Code-Protein</h1>
	<svelte:fragment slot="trail"><button on:click={drawerOpen} class="hover:bg-tertiary-200 rounded-lg"><img src="{indice}" class="" alt="indice"></button></svelte:fragment>
</AppBar>
</svelte:fragment>
<svelte:fragment slot="sidebarRight"><Drawer>
	<p class="font-bold text-center">Em Breve....</p>
</Drawer></svelte:fragment>
	<slot />
	<h1 class="h3 font-bold text-center mt-16">Olá, Bem-vindo ao Code Protein, <br> nosso site web completamente especializado em nutrição e dieta balanceada.</h1>
	<div class="mx-auto w-96"><p class="text-center mt-3">nesse site você poderá calcular seu IMC e saber se está abaixo ou acima do peso ideal de acordo com a ciência e também poderá conferir quantas gramas de proteina você precisa ingerir por dia de acordo com seu peso corporal.</p></div>
	<h3 class="my-8 text-center">Vamos então começar por um breve cálculo para saber se está tudo ok com o seu IMC (Indíce de Massa Corporal).</h3>
	<table class="mx-auto border-2 border-surface-400">
		<tr class="bg-primary-500 text-surface-900 gap-15">
			<th>Peso</th><th>Altura</th><th>Resultado</th>
		</tr>
		<tr>
			<td>
			<input class="w-24 sm:w-40 md:w-56 lg:w-64 bg-surface-800 rounded-lg border-2 border-surface-400 m-2" type="number" name="pesoInput" id="peso" placeholder="Seu Peso...">
			</td>
			<td>
			<input class="w-24 sm:w-40 md:w-56 lg:w-64 bg-surface-800 rounded-lg border-2 border-surface-400 m-2" type="number" name="alturaInput" id="alt" placeholder="Sua Altura...">
			</td>
			<td>
				<p id="res" class="font-bold pr-2">Seu IMC está OK.</p>
			</td>
		</tr>
	</table>
	<div class="text-center mt-4"><button class="font-bold rounded-xl bg-transparent border-2 border-primary-500 hover:border-surface-900 p-2 text-primary-500 hover:bg-primary-500 hover:text-surface-900">Calcular</button></div>
	<div class="w-3/4 mx-auto mt-16 mb-10"><h3 class="text-center font-bold">Agora que você já sabe se está acima do peso ou não vamos para a parte de calcular sua ingestão de proteinas diária, lembrando que se você quer emagrecer/perder peso essa parte não vai te interessar muito pois para perca de peso você pode montar uma dieta mais balanceada tirando boa parte da gordura da sua alimentação e um pouco de carboidratos(principalmente se você é de comer muita massa), porque a proteina não te engorda, pelo contrário, ela ajuda seu corpo a construir mais músculos e te deixar mais forte, é super saúdavel!!</h3></div>
	<div class="w-3/4 mx-auto mb-8"><h2 class="text-center font-bold">Essa calculadora irá calcular a quantidade de proteinas em gramas que você precisa consumir todos os dias e dirá essa quantidade com base no nivel de esforço físico que você faz no dia a dia, os níveis são divididos em Leve, Moderado, Ativo e Extremo</h2></div>
	<table class="mx-auto border-2 border-surface-400">
		<tr class="bg-primary-500 text-surface-900 gap-5 md:gap-15">
			<th>Peso</th><th>Leve</th><th>Moderado</th><th>Ativo</th><th>Extremo</th>
		</tr>
		<tr>
			<td>
			<input class="w-24 sm:w-40 md:w-56 lg:w-64 bg-surface-800 rounded-lg border-2 border-surface-400 m-2" type="number" name="pesoInput" id="peso" placeholder="Seu Peso...">
			</td>
			<td>
				<p id="res" class="text-sm font-bold pr-2">Esperando...</p>
			</td>
			<td>
				<p id="res" class="text-sm font-bold pr-2">Esperando...</p>
			</td>
			<td>
				<p id="res" class="text-sm font-bold pr-2">Esperando...</p>
			</td>
			<td>
				<p id="res" class="text-sm font-bold pr-2">Esperando...</p>
			</td>
		</tr>
	</table>
	<div class="text-center mt-4"><button class="font-bold rounded-xl bg-transparent border-2 border-primary-500 hover:border-surface-900 p-2 text-primary-500 hover:bg-primary-500 hover:text-surface-900">Calcular</button></div>
	<div class="flex justify-center mb-5">
	<ul>
		<li>Leve: Pessoa Sedentária, não pratica atividades fisícas.</li>
		<li>Moderado: Procura se exercitar de vez em quando fazendo caminhadas ou maratonas.</li>
		<li>Ativo: Vai a Academia de 2-4 vezes na semana ou pratica esportes com frequência.</li>
		<li>Extremo: Vai a Academia de 5-6 vezes na semana, busca progressão de carga ou faz treino extremo e constante no esporte que pratica.</li>
	</ul>
	</div>
	<svelte:fragment slot="pageFooter">
	<div class="bg-primary-500 text-surface-900 text-center font-bold py-5">© Copyright - Desenvolvido por Erick Venãncio</div>
	</svelte:fragment>
</AppShell>


</body>