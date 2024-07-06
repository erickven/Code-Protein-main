<script>
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	initializeStores();

	const drawerStore = getDrawerStore();
	import { AppBar } from '@skeletonlabs/skeleton';
	import { AppShell } from '@skeletonlabs/skeleton';
	import logo from '$lib/icons8-proteína-64.png';
	import indice from '$lib/icons8-lista-48.png';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import teste from '$lib/image.png'
	import carne from '$lib/carne.jfif'
	import peito from '$lib/peito.jfif'
	import atum from '$lib/atum.png'
	// let peso = document.querySelector('#peso');
	// let alt = document.querySelector('#alt')
	// function calcularImc(peso, alt){
	// 	return (alt * alt) / peso;
	// }
	function drawerOpen() {
		drawerStore.open({});
	}
	let peso1 = 1;
	let alt = 1;
	let peso2 = 1;
</script>

<body class="bg-tertiary-50 text-surface-900 dark:bg-surface-900 dark:text-tertiary-50">
	<AppShell>
		<svelte:fragment slot="header"
			><div class="shadow-xl">
				<AppBar>
					<svelte:fragment slot="lead"
						><img src={logo} alt="protein-logo" class="w-12" /></svelte:fragment
					>
					<h1 class="h3 font-bold">Code-Protein</h1>
					<svelte:fragment slot="trail"
						><LightSwitch /><button on:click={drawerOpen} class="rounded-xl hover:bg-surface-500"
							><img src={indice} class="" alt="indice" /></button
						></svelte:fragment
					>
				</AppBar>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="sidebarRight"
			><Drawer>
				<p class="text-center font-bold">Em Breve..</p>
			</Drawer></svelte:fragment
		>
		<slot />
		<h1 class="h3 mt-12 text-center font-bold">
			Olá, Bem-vindo ao Code Protein, <br /> nosso web site completamente especializado em nutrição e
			dieta balanceada.
		</h1>
		<div class="mx-auto w-96">
			<p class="mt-3 text-center">
				nesse site você poderá calcular seu IMC e saber se está abaixo ou acima do peso ideal de
				acordo com a ciência e também poderá conferir quantas gramas de proteina você precisa
				ingerir por dia de acordo com seu peso corporal.
			</p>
		</div>
		<h3 class="my-8 text-center">
			Vamos então começar por um breve cálculo para saber se está tudo ok com o seu IMC (Indíce de
			Massa Corporal).
		</h3>
		<table class="mx-auto border-2 border-surface-400">
			<tr class="gap-15 bg-primary-500 text-surface-900">
				<th>Peso</th><th>Altura</th><th>Resultado</th>
			</tr>
			<tr>
				<td>
					<input
						class="m-2 w-24 rounded-lg border-2 border-surface-400 bg-surface-800 text-center text-tertiary-50 sm:w-40 md:w-56 lg:w-64"
						min={1}
						type="number"
						bind:value={peso1}
						name="pesoInput"
						id="peso"
						placeholder="Seu Peso..."
					/>
				</td>
				<td>
					<input
						class="m-2 w-24 rounded-lg border-2 border-surface-400 bg-surface-800 text-center text-tertiary-50 sm:w-40 md:w-56 lg:w-64"
						min={1}
						type="number"
						bind:value={alt}
						name="alturaInput"
						id="alt"
						placeholder="Sua Altura..."
					/>
				</td>
				<td>
					<p id="res" class="pr-2 font-bold">{(peso1 / (alt * alt)).toFixed(2)}</p>
				</td>
			</tr>
		</table>
		<div class="mb-5 mt-5 flex justify-center font-bold">
			<ul>
				<li>Menor que 18.5: Baixo Peso</li>
				<li>Entre 18.5 e 24.9: Peso Normal</li>
				<li>Entre 25-29.9: Excesso de Peso</li>
				<li>Maior que 30: Obesidade</li>
				<li>Maior que 35: Obesidade Extrema</li>
			</ul>
		</div>
		<div class="mx-auto mb-10 mt-24 w-3/4">
			<h3 class="text-center font-bold">
				Agora que você já sabe se está acima do peso ou não vamos para a parte de calcular sua
				ingestão de proteínas diária, lembrando que se você quer emagrecer/perder peso essa parte
				não vai te interessar muito pois para perca de peso você pode montar uma dieta mais
				balanceada tirando boa parte da gordura da sua alimentação e um pouco de
				carboidratos(principalmente se você é de comer muita massa), porque a proteína não te
				engorda, pelo contrário, ela ajuda seu corpo a construir mais músculos e te deixar mais
				forte, é super saúdavel!!
			</h3>
		</div>
		<div class="mx-auto mb-8 w-3/4">
			<h2 class="text-center font-bold">
				Enfim, Essa calculadora irá calcular a quantidade de proteinas em gramas que você precisa
				consumir todos os dias e dirá essa quantidade com base no nivel de esforço físico que você
				faz no dia a dia, os níveis são divididos em Leve, Moderado, Ativo e Extremo.
			</h2>
		</div>
		<table class="mx-auto mb-16 border-2 border-surface-400">
			<tr class="bg-primary-500 text-surface-900">
				<th>Peso</th><th class="px-1 sm:px-2">Leve</th><th class="px-1 sm:px-2">Moderado</th><th class="px-1 sm:px-2"
					>Ativo</th
				><th class="px-1 sm:px-2">Extremo</th>
			</tr>
			<tr>
				<td>
					<input
						class="m-2 w-24 rounded-lg border-2 border-surface-400 bg-surface-800 text-center text-tertiary-50 sm:w-40 md:w-56 lg:w-64"
						type="number"
						bind:value={peso2}
						name="pesoInput"
						id="peso"
						placeholder="Seu Peso..."
					/>
				</td>
				<td>
					<p id="res" class="pr-2 text-center text-sm font-bold">{(peso2 * 0.8)).toFixed(2)}g</p>
				</td>
				<td>
					<p id="res" class="pr-2 text-center text-sm font-bold">{(peso2 * 1.2)).toFixed(2)}g</p>
				</td>
				<td>
					<p id="res" class="pr-2 text-center text-sm font-bold">{(peso2 * 1.6)).toFixed(2)}g</p>
				</td>
				<td>
					<p id="res" class="pr-2 text-center text-sm font-bold">{(peso2 * 2)).toFixed(2)}g</p>
				</td>
			</tr>
		</table>
		<div class="mb-5 flex justify-center">
			<ul class="ml-4">
				<li>Leve: Pessoa Sedentária, não pratica atividades fisícas.</li>
				<li>Moderado: Procura se exercitar de vez em quando fazendo caminhadas ou maratonas.</li>
				<li>Ativo: Vai a Academia de 2-4 vezes na semana ou pratica esportes com frequência.</li>
				<li>
					Extremo: Vai a Academia de 5-6 vezes na semana, busca progressão de carga ou faz treino
					extremo e constante no esporte que pratica.
				</li>
			</ul>
		</div>
		<h3 class="h3 my-8 text-center font-bold underline">
			Não sabe oquê comer para bater essa meta de proteínas??
		</h3>
		<p class="h5 text-center">Aqui estão alguns alimentos riquissimos em proteínas:</p>
		<div id="cards" class="flex justify-center gap-8">
			<div class="card mt-6 inline-block w-24 sm:w-32 text-sm md:w-72 p-4">
				<img src={peito} alt="teste1"class="w-72 h-56" />
				<h5 class="text-center font-bold">Peito de Frango</h5>
				<p class="text-center mt-2">É um grande alimento proteíco, em apenas 100g de frango temos 30g de proteínas!!!</p>
			</div>
			<div class="card mt-6 inline-block w-24 sm:w-32 text-sm md:w-72 p-4">
				<img src={carne} alt="carne" class="w-72 h-56" />
				<h5 class="text-center font-bold">Carne Bovina</h5>
				<p class="text-center mt-2">Em especial o bife e a carne de sol tem aproximadamente 27g de poteínas em 100g!!.</p>
			</div>
			<div class="card mt-6 inline-block w-24 sm:w-32 text-sm md:w-72 p-4">
				<img src={atum} alt="teste1" class="w-72 h-56" />
				<h5 class="text-center font-bold">Atum em Conserva</h5>
				<p class="text-center mt-2">O atum em conserva contém 26,2g de proteína apenas em 100g de alimento, além de ter muito ômega-3!!</p>
			</div>
		</div>
		<div class="mb-7 mt-16 text-center font-bold">
			<p>
				Esta calculadora foi projetada para ajudar a estimar suas necessidades diárias de proteína
				para o planejamento de sua dieta e tem apenas fins informativos. Esta ferramenta não
				substitui o atendimento de um profissional da saúde qualificado e é destinada a adultos
				saudáveis e não é apropriada para crianças e mulheres grávidas ou amamentando ou pessoas com
				doenças ou condições médicas específicas que podem exigir diferentes quantidades, fontes ou
				tipos de proteína alimentar.
			</p>
		</div>
		<svelte:fragment slot="pageFooter">
			<div class="bg-primary-500 py-5 text-center font-bold text-surface-900">
				© Copyright - Desenvolvido por Erick Venâncio
			</div>
		</svelte:fragment>
	</AppShell>
</body>
