{ pkgs }: {
  deps = [
    pkgs.import Gitalk from 'gitalk'
    pkgs.unzip
		pkgs.nodePackages.prettier
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}