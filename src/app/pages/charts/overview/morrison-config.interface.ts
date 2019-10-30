export interface MorrisonConfig {
  data: Array<{ y: string, a: number, b: number }>
  | Array<{ label: string, value: number }>;
  options: {
    resize?: boolean;
    xkey?: string;
    ykeys?: string[];
    labels?: string[];
    lineColors?: string[];
    lineWidth?: number;
    colors?: string[];
  };
}
