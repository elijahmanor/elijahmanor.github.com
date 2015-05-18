# Slide 4

<div class="mermaid">
  graph TD;
  classDef default fill:#dff0d8,stroke:#333,stroke-width:1px;
  classDef state fill:#d9edf7,stroke:#333;
  classDef events fill:#f2dede,stroke:#333;
  classDef trigger fill:#fcf8e3,stroke:#333;
  BIA[BudgetItemAllocator]-->BIAC[BudgetItemAllocatorCollection];
  BIA-->BIADI[BudgetItemAllocatorDispatcher];
  BIA-->BICM[BudgetItemChooserModal];
  BIAC-->BIAD[BudgetItemAllocatorDatasource];
  BIAD-->BIAR[BudgetItemAllocatorRow];
  BIAR-->BIADI;
  BIAC-->DLV[DOMListView];
  BIAD---DLV;
  BIAR-->BIARE{Events};
  class BIARE events;
  BIARE-->|Choose Budget Item|TriggerC>BudgetItemAllocatorDispatcher.choose.dispatch];
  class TriggerC trigger;
  BIARE-->|Prompt to Delete|PromptDelete(Reveal Prompt);
  class PromptDelete state;
  class TriggerD trigger;
  click TriggerC scrollToBudgetItemChooserModal;
</div>
