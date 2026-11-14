
import './style.css';

// Estrutura da aplicação
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="container">
    <header>
      <h1>Triângulo de Sierpinski</h1>
      <p>Explore a construção de um fractal utilizando recursividade.</p>
    </header>

    <section class="controls">
      <label for="nivel">Nível de recursividade:</label>

      <input
        type="number"
        id="nivel"
        min="0"
        max="8"
        value="0"
      />
    </section>

    <section class="visualizacao">
      <canvas id="canvas"></canvas>
    </section>

    <p id="informacao">Nível atual: 0</p>
  </main>
`;

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
const ctx = canvas.getContext('2d')!;
const input = document.querySelector<HTMLInputElement>('#nivel')!;
const informacao = document.querySelector<HTMLParagraphElement>('#informacao')!;

// Representação de um ponto no plano
interface Ponto {
  x: number;
  y: number;
}

// Calcula o ponto médio entre dois vértices
function pontoMedio(a: Ponto, b: Ponto): Ponto {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2
  };
}

// Desenha o triângulo utilizando recursividade
function desenharTriangulo(
  a: Ponto,
  b: Ponto,
  c: Ponto,
  nivel: number
): void {

  // Caso base: desenha o triângulo quando chega ao nível zero
  if (nivel === 0) {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.closePath();

    ctx.fillStyle = '#2563eb';
    ctx.fill();

    return;
  }

  // Calcula os pontos médios dos lados
  const ab = pontoMedio(a, b);
  const ac = pontoMedio(a, c);
  const bc = pontoMedio(b, c);

  // Chamadas recursivas para os três triângulos externos
  desenharTriangulo(a, ab, ac, nivel - 1);
  desenharTriangulo(ab, b, bc, nivel - 1);
  desenharTriangulo(ac, bc, c, nivel - 1);
}

// Ajusta o tamanho do Canvas
function ajustarCanvas(): void {
  const largura = canvas.clientWidth;
  const altura = canvas.clientHeight;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = largura * dpr;
  canvas.height = altura * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  desenhar();
}

// Desenha o fractal
function desenhar(): void {
  const nivel = Number(input.value);

  const largura = canvas.clientWidth;
  const altura = canvas.clientHeight;

  // Limpa o desenho anterior
  ctx.clearRect(0, 0, largura, altura);

  // Define o tamanho do triângulo
  const tamanho = Math.min(largura * 0.85, altura * 0.85);
  const alturaTriangulo = tamanho * Math.sqrt(3) / 2;

  // Define os três vértices do triângulo principal
  const a = {
    x: largura / 2,
    y: (altura - alturaTriangulo) / 2
  };

  const b = {
    x: largura / 2 - tamanho / 2,
    y: (altura + alturaTriangulo) / 2
  };

  const c = {
    x: largura / 2 + tamanho / 2,
    y: (altura + alturaTriangulo) / 2
  };

  // Inicia a recursividade
  desenharTriangulo(a, b, c, nivel);

  informacao.textContent =
    `Nível atual: ${nivel} | Triângulos: ${Math.pow(3, nivel)}`;
}

// Atualiza automaticamente quando o valor muda
input.addEventListener('input', () => {
  let nivel = Number(input.value);

  if (!Number.isFinite(nivel)) {
    return;
  }

  nivel = Math.max(0, Math.min(8, Math.floor(nivel)));

  input.value = String(nivel);

  desenhar();
});

// Redesenha quando a janela muda de tamanho
window.addEventListener('resize', ajustarCanvas);

// Inicialização
ajustarCanvas();
