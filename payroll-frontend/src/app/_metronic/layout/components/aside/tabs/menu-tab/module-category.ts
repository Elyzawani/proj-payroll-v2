export class ModuleCategory {
  id: string;
  name: string;
  subCategories: SubModuleCategory[];
}

export class SubModuleCategory {
  id: string;
  name: string;
  items: ModuleItem[];
}

export class ModuleItem {
  id: string;
  name: string;
  path: string;
}
