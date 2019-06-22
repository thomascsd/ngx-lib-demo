import { Rule, SchematicContext, Tree, url, move, apply } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  NodeDependency,
  NodeDependencyType,
  addPackageJsonDependency,
  getWorkspace,
  getProjectFromWorkspace,
  addModuleImportToRootModule
} from 'schematics-utilities';

function addPackageJsonDependencies(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      { type: NodeDependencyType.Default, version: '~1.0.0', name: '@thomascsd/shared-comp' }
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(tree, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}"`);
    });

    return tree;
  };
}

function installPackage(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);

    return tree;
  };
}

function addModuleToImports(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const project = getProjectFromWorkspace(
      workspace,
      options.project ? options.project : Object.keys(workspace['projects'])[0]
    );
    const coreModuleName = 'CoreModule';
    const shardModuleName = 'SharedModule';

    addModuleImportToRootModule(tree, coreModuleName, './core/core.module', project);
    context.logger.log('info', `✅️ "${coreModuleName}" is imported`);

    addModuleImportToRootModule(tree, shardModuleName, './shared/shared.module', project);
    context.logger.log('info', `✅️ "${shardModuleName}" is imported`);
    
    

    return tree;
  };
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function schematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const templateSrc = url('./files');
    //vconst templMove0=





    return tree;
  };