package ink.markidea.note.entity.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;



@Getter
@Setter
@Accessors(chain = true)
public class ArticleVo  {

    private Integer articleId;

    private String notebookName;

    private String noteTitle;

    private String content;

    private String previewContent;
}